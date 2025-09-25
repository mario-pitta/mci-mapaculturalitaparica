// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleMapsKey: "AIzaSyBuy4K3TmiArHSftGcbCzlVB7Lv_zWYynM",
  emailjs_pk: 'IpeSv2jf1Qy_0b7cA',
  emailjsId: 'service_9vanxm9',
  emailjsTemplateId: "template_4mj7mvs",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
import emailjs from '@emailjs/browser';
