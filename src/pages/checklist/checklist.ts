import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {
  checklist: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {

    this.checklist = this.navParams.get('checklist');
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
  }

  addItem(): void{

    let prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: 'Enter the name of the task for this checklist below',
      inputs: [
        {
          name: 'name',
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'save',
          handler: data => {
            this.checklist.addItem(data.name);
          }
        }
      ]
    });
    prompt.present();
  }

  toggleItem(item): void{
    this.checklist.toggleItem(item);
  }

  itemCheched(): number{
   let numero = 0;
   for (let item of this.checklist.items){
      if (item.checked) numero += 1;
   }

   return numero;
  }

  removeItem(item): void{
    this.checklist.removeItem();
  }

  renameItem(item): void{

    let prompt = this.alertCtrl.create({
      title: 'Rename item',
      message: 'Enter the new name of the task for this checklist below and optionally some comments',
      inputs: [
        {
          name: 'name'
        },
        {
          name: 'nota'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.checklist.renameItem(item, data.name, data.nota);
          }
        }
      ]
    });
    prompt.present();
  }

  uncheckItems(): void {

    this.checklist.items.forEach((item)=>{
      if (item.checked){
        this.checklist.toggleItem(item);
      }
    });
  }
}
