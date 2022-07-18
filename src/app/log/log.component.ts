import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  		$(document).keypress(function (e) {
		 var key = e.which;
		 if(key == 13)  // the enter key code
		  {
		    

			$.ajax({
			    type: 'POST',
			    contentType:"application/json; charset=utf-8",
			    url: 'http://localhost:8080/LogBackend/rest/log/inserir',
			    data: JSON.stringify({ conteudo: $("#conteudoInput").val(), vezes: $("#vezesInput").val() }),
			    dataType: 'json',
			    success: function() {
			    		 $(window.location)[0].replace("table");
			    }, 
			    error: function(req, err){ console.log('error'); }
			});

			
		  }
		});
  }

}
