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
 import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

 const dbClient = new DynamoDBClient({ region: "ap-south-1"})
 
 export const lambdaHandler = async (event, context) => {
     try {
         const healthyPath = '/health';
         const getProductsPath = '/products';
         const addProductsPapth = '/addProd';
         const updateProductPath = '/updateProd';
         const productTableName = 'MyProductInfo';
 
 
         console.log(event);
 
         let response;
         switch(true){
             case event.httpMethod === 'GET' && event.path === healthyPath:
                 console.log(healthyPath + ' -> Success')
                 response = {
                     "statusCode": 200,
                     "headers": {
                       "Content-Type": "application/json"
                     },
                     "body": "{\"message\":\"Hello, world! - Success - healthyPath\"}"
                   };
             case event.httpMethod === "GET" && event.path === getProductsPath:
                 console.log(`Get Tables from ptah : ${getProductsPath}`);
                 const command = new ListTablesCommand({});
                 const response = await dbClient.send(command);
                 console.log(response);
         }
         return response;
 
     } catch (err) {
         console.log(err);
         return err;
     }
 };
 
 
 /*
 export const main = async () => {
   const command = new ListTablesCommand({});
 
   const response = await client.send(command);
   console.log(response);
   return response;
 };
 
 async function getProducts() {
 
     const command = new ListTablesCommand({});
     const datalist = await dbClient.send(command);
     console.log(datalist);
     return {
         "statusCode": 200,
         "headers": {
             "Content-Type": "application/json"
             },
             "body": datalist
             };
   }
   */