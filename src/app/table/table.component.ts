import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
	
  	

  constructor() { }

  ngOnInit(): void {
  		
  		$.getJSON("http://localhost:8080/LogBackend/rest/log/listar",
	    function(data){
	        
	       $("#table tbody tr").empty();
	       for( let i= 0; i<data.length; i++){
	       	
	       	$("#table tr:last").after("<tr><td>"+data[i].conteudo+"<td>"+data[i].vezes+"</td>");
	       }
	       $("#loading").hide();	       
	       return false;
	    });

  		
  		$("#inserir").click(function(){
		  $(window.location)[0].replace("insert");
		}); 

  }

}
