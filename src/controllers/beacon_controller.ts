

import * as express from 'express';
import admin from "firebase-admin";
import {getFirestore} from "firebase-admin/firestore";
import { shared } from '../shared';
class Beaconcontroller{


    sendNotification = async (request: express.Request, response: express.Response) => {

        console.log(request.body)
        try{
            var listTokens: any[] = [];
            var devices = await shared.db.collection('devices').get()
            devices.forEach((doc)=>{
                listTokens.push(doc.data()['token']) ;
            })

            console.log(listTokens)
            this.sendNotificationFCM(request.body, listTokens)
            
            response.send({
                "success":true
            });
        }catch(e){
            console.log(e);
            response.send({
              "error": e
            })
        }
       
      }

    sendNotificationFCM = async (data: any, tokens: any) => {
      console.log("start sending notification");
        var send = await admin.messaging().sendMulticast({
          tokens: tokens,
          notification: {
            title: "iBeacon Station Scanner",
            body: `It's ibeacon notification from Station\n🛟UDID: ${data['udid']}\n🕒at: ${data['at']}\n🚩rssi: ${data['rssi']}`,
            imageUrl: "https://i.kym-cdn.com/photos/images/original/001/688/905/3b7.jpg",
          },
        });

      }
}

export default new Beaconcontroller();