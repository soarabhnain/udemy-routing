import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { stat } from "fs";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface ResolvedServer{
    id:number,
    name:string,
    status:string
}

@Injectable()

export class ServerResolver implements Resolve<ResolvedServer>{

    constructor(private serversService:ServersService){}


    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<ResolvedServer> | Promise<ResolvedServer> | ResolvedServer{
            return this.serversService.getServer(+route.params['id']);
    }
}