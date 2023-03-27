import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { applicationDefault, cert, initializeApp } from "firebase-admin/app";
import Beaconcontroller from './src/controllers/beacon_controller';
import bodyParser from 'body-parser';
import { getFirestore } from 'firebase-admin/firestore';
import { shared } from "./src/shared/index";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const router = express.Router();


router.get('/', (request, response) => {
  response.send('Hello world!');
});
router.post('/sendNotification', Beaconcontroller.sendNotification)
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/api', router);

initializeApp(
  { credential: cert(
    {
      "projectId": "beacon-b54d4",
      "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQClFWNVkU7LkSiF\neiN3D2ArkifnDIpMd5ZgTtL9CerOKCXcTfV9EgeXGrGqoCnO064LCps1EwsdSbnZ\n9bS7K2mTMjP3f9JwFfVmNxK2cJ9ao4xIz8J0kDnR7jCYnOfhteBQaBlXBXXEB9OL\nvlYKwqdL6zpo9pHjXp4i0p4DAdGGh4p2098uLte7dd34DTG3RAZf0uS7U4ymhUmm\nBckEAi6e4xfd42fPY6bCFKiIF883OWZ8B2Og3QF3+5KTZT1U2jB+4BDB5DcVehMb\nnEuLafqBLHqkYX1fbpZCUYLP28e8dIRXBpZUhCmgih/z6NeSyXyvTAT63Sv7JGqP\ncDWfN003AgMBAAECggEAFj5UBJ8QJWi5M4b6CVxWgnhujPjJF7WTWwWz8ylnbIDH\nXTBZ8BDCWg9cOhfbmkU2ccFrmVKoEDmzY5VyVTfrwUwl6WbdNYIX7z5jdJanOiDI\nUbVAx9D5IXq9LIsTyXtmrp7gLzQKoq/FRtKOKGQDA709wQ/cJ21D1IBZjyErGLuq\nOzt9+XeHlFw4zYKA6IThTzRzjn1XcH6oxasEu4TP8h6jxKFUffaYSTSLJoqwz/wJ\nZh/yJBZNNtud4xvMYWqdcFP7b61N4KKirYsUYGNTBMDRSfZj4fYv4uUxI3kVlAfQ\nxleoncK/7ut1FIQUfcupi9e6GRrkFofnnE14GmhpGQKBgQDPSaekmPHWYZhjoNrg\nNnMZxsnkM6e38T8UxcTjl3Of0MTTXgdSslUaCYvvOaboZe2/yVdBIq0JgKrW+ooj\n+hsz2I09Jpw2USB2Z0VPm678EoTMOb6iYRCDH7pHvIn8s1tQcdQDAAIk7ITd3i6m\nOWcRreUXSBdFXTOvQah7+EbICQKBgQDL4L9dIFHcz9GHc7qPr9+ruq98jYBRfNdt\nJsOpEJzHVqVsmZJE8HAjhTYiYTeIpszHJeo9BKlBfuTd5pacBcoqu0znphoq5E/G\neXedfI9lHTYNVmy0r+NrrxrngXoHxGTquAhLTkOrOCXJEKnxhA3MrJFx13I+TP/R\nK80ToKI7PwKBgQCS4edH7BSZy6g3GJlf/VVMM5+F89BpuCnx5z3f48bLvRxrhhp8\nT9+bxp4A0wJhdTCmEN6iShcBP8pO8VOHsMcr0swqQ7y3hH8TR5RGl9PDzL+LE3Px\nDgSsVYQjJwdEKDeRZkdMJOpgDbUMnk7B/LT7QxStjajnvuZLzqO7zK8jOQKBgF6O\n8rKClvVO/eNQ7apO6/J+N34RMv6YZGIfpIf5SH271iW0ZH7M9XXEBwOTC2q50ihb\nkXSTgNz7ubKhjCD5HncLP/QAugpCsi1fkPbeGrPPBI7TEsALA/Oh11ygVLTdheDH\nUjF7Ly9ubzf+HpQBp1TShPLD9hynIc8l/Yuo6RWJAoGBAJjpsky4n5A/AdEfHmEd\nu9FEbnZ+xp0YsH563OsL1NiE3kpiae1kiVYNG9Z8eEdNIqzWkwWidTsDOBSJ2HHM\ndBE+Pvqb78wnBYuHEKBZ768fZ7sf4ccZrvISHdKu30Vf40N32EKs3tUtPBcCQyCu\nIWjt73wX++6znpw8+AvNLxkv\n-----END PRIVATE KEY-----\n",
      "clientEmail": "firebase-adminsdk-aqaqr@beacon-b54d4.iam.gserviceaccount.com",
    }
  ),}
);
shared.db = getFirestore()
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

