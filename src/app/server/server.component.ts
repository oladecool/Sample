import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  allowNewserver = false;
  serverStatus = 'No server was created!';
  serverName = 'Testserver';

  constructor(){
    setTimeout(() => {
      this.allowNewserver = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
