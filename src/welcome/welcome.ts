//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  heading = `Welcome to Atma's Massage!`;
  phoneNumber = '425-292-0044';
  underConstruction = 'This site is under construction. Please bear with us while we work...';
  serving = "Serving the Snoqualmie Valley since 1997";
  moreInfo = "For more information call:";

  canDeactivate() {
    return true;
  }
}
