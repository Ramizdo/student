import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	 title ='DOUGLAS RAMIREZ';
 	 apellido ='';
 	 notas = [
  		{id:1, title:'Nota 1', materia:'Materia 1'},
  		{id:2, title:'Nota 2', materia:'Materia 2'},
  		{id:3, title:'Nota 3', materia:'Materia 3'},
  		{id:4, title:'Nota 4', materia:'Materia 4'},
  		];

	nuevanota = {id:null, title:null, materia:null};
 	ver_form = false;
 	editing=false;

 	addNote(){
		this.ver_form=true; 
		this.editing=false;
 	}
 	verNota(nuevanota){
 		this.ver_form=true;
 		this.nuevanota=nuevanota;
 		this.editing=true;
 	}
 	cancel(){
 		this.ver_form=false;
 		this.nuevanota={id:null, title:null, materia:null};
 	}
	createNote(){
		if (this.editing){
			var me = this;
			this.notas.forEach(function(el, i){
				if (el.id === me.nuevanota.id){
					me.notas[i] = me.nuevanota;
				}
			});
			this.ver_form=false;
			this.nuevanota={id:null, title:null, materia:null};
		}
		else {
			this.nuevanota.id=Date.now();
 			this.notas.push(this.nuevanota);
 			this.ver_form=false;
 			this.nuevanota={id:null, title:null, materia:null};
		};
 		
	 }
	 delete(){
	 	var me = this;
		this.notas.forEach(function(el, i){
			if (el == me.nuevanota){
				me.notas.splice(i, 1);
			}
		});
		this.ver_form=false;
		this.nuevanota={id:null, title:null, materia:null};
	 }
}
