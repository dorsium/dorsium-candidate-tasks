import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import yaml from 'yaml';
import path from 'path';
import { Express } from 'express';

const swaggerFilePath = path.join(__dirname, '../openapi.yaml');
const swaggerFile = fs.readFileSync(swaggerFilePath, 'utf8');
const swaggerDocument = yaml.parse(swaggerFile);

export function setupSwagger(app: Express) {
  app.use('/rpc-gateway-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
