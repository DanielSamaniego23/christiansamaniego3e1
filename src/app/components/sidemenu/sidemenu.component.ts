import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
userName: string = "Christian";
theme: string="";
widthMenu: number= 25;
visibleMenu: boolean = true;
  
setVisibilitiMenu(): boolean {
      this.visibleMenu = !this.visibleMenu;
         return this.visibleMenu;
    }
  
    setThemeColor(color:string):string{
      return this.theme = color;
    }

    setSizeMenu(){
      this.widthMenu+=10;
      if(this.widthMenu > 100){
        this.widthMenu = 50;
      }
    }
}
