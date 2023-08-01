/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */


import AWS from 'aws-sdk';
//const AWS = require('aws-sdk')
/*
AWS.config.update({
     region: 'ap-south-1'
 });

 const myProductsTable = AWS.DynamoDB.DocumentClient();
 const productTableName = 'products';
 const healthPath = '/health';
 const getProductsPath = '/products';
 const addProductsPapth = '/addProd';
 const updateProductPath = '/updateProd';
*/

export const lambdaHandler = async (event, context) => {
    try {
        //console.log(event);
        console.log(AWS.VERSION);
        return AWS.VERSION;

        /*
        let response;
        switch(true){
            case event.httpMethod === 'GET' && event.path === healthPath:
                response = buildResponse(200);
        }
        return response;
        */

    } catch (err) {
        console.log(err);
        return err;
    }
};
