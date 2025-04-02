describe('Testing POST and PUT on Typicode', () => {

  it('Send first POST', () => {
    cy.request({
      method: "POST",
      url: 'https://jsonplaceholder.typicode.com/posts/',
      body:{
        userID: 1,
        title: 'API testing with cypress',
        body: 'First POST'
      }
    })
  });

  it('check log with cy.log on first POST', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
      {
        userID: 1, 
        title: 'API testing with cypress', 
        body: 'First POST'
      }
    ).then((response) => {
      cy.log(JSON.stringify(response.body));
    })
  });

  it('check response on first POST', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
      {
        userID: 1, 
        title: 'API testing with cypress', 
        body: null
      }
    ).then((response) => {
      const cuerpoDeLaRespuesta = response.body
      cy.log(JSON.stringify(cuerpoDeLaRespuesta));
      expect(response.status).to.eq(201);
      expect(response.body.title).to.be.a('string');
      expect(cuerpoDeLaRespuesta).to.have.property('title', 'API testing with cypress');
      expect(cuerpoDeLaRespuesta).to.have.property('body', null);
      expect(response.body).to.have.property('userID', 1);
      expect(response.body.userID).to.eq(1);
      expect(response.body.id).eq(101)
    });
  })

  it('Send "PUT" and check all the values modified on the response', () => {
    const post5 =  {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
    const putBody =  {
      id: 5,
      body: 'first put'
    }
    cy.request('https://jsonplaceholder.typicode.com/posts/5').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.eq(post5);
    });
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/5',  putBody).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).deep.eq(putBody);
      });
   });

  it('Send first PATCH and check the response', () => {
  cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/16', 
    {
      userId:1,
      id: 5,
      title: 'news', 
      body: 'first post',
    }
  ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'news');
      expect(response.body.body).to.eq('first post');
      expect(response.body.userId).to.eq(1);
      expect(response.body).to.have.property('userId', 1);
      expect(response.body.id).to.eq(5);
    });
  });

  it('Send first DELETE method', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
    expect(response.status).to.eq(200);
    })
   });

   it.only('All methods used in one test', () => {
    //Declaramos las variables a usar en los metodos POST, PUT y PATCH
    const postData = {
      "name": "Objeto creado por Javier Flores",
      "data": {
        "year": 2024,
        "price": 10,
        "CPU model": "Api testing with Cypress",
        "Hard disk size": "1 TB",
      }
    }
    const putData = {
      "name": "PUT update",
      "data": {
        "year": 2024,
        "price": 10,
        "CPU model": "PUT with Cypress",
        "Hard disk size": "1 TB"
      }
    }
    const patchData = {
      "name": "PATCH change",
      "data": {
        "CPU model": "Happy API testing with Cypress",
      }
    }
// Aqui hacemos un POST para crear un Objeto
    cy.request('POST', 'https://api.restful-api.dev/objects', postData)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.include(postData);
// Con cy.wrap guardamos el valor de la ID para usarlo más adelante
        cy.wrap(response.body.id).as('objectID');
      });
    cy.get('@objectID').then((objectID) => {
      cy.log(objectID);
      cy.request('GET', `https://api.restful-api.dev/objects/${objectID}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.include(postData);
      });
// // Aquí hacemos un PUT para comprobar que los datos se sobreescriben
    cy.request('PUT', `https://api.restful-api.dev/objects/${objectID}`, putData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(putData);
    });
    cy.wait(1000);
// // Aquí hacemos un PATCH para comprobar que podemos modificar solo algunos datos, (pero en esta API actúa como un PUT)
    cy.request('PATCH', `https://api.restful-api.dev/objects/${objectID}`, patchData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(patchData);
    cy.request(`https://api.restful-api.dev/objects/${objectID}`)
    });
// Aquí hacemos un DELETE para borrar el objeto creado
    cy.request('DELETE', `https://api.restful-api.dev/objects/${objectID}`) .then((response) => {
      expect(response.body.message).to.eq(`Object with id = ${objectID} has been deleted.`);
    })
   });
  });



})