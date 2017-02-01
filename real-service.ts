import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs/Rx';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { UrlParamService } from './urlParam.service';
import { UserAPIService } from './user.api.service';

@Injectable()
export class ActivityAPIService {
    private BASE_URL: string = '/rest/api/activities';
    private BASE_FILE_URL: string = 'rest/api';

    constructor(private http: Http, private urlParam: UrlParamService) {}

    /* my-activity methods */
    public getMyActivitiesByCategory(paramObj): Observable<any> {
        paramObj.id = 'me';
        let url = this.urlParam.formUrl(this.activitiesUrlV2, paramObj);
        return this.http.get(url).map(response => response.json());
    }

    public getMySubcategories(paramObj): Observable<any> {
        paramObj.id = 'me';
        let url = this.urlParam.formUrl(this.activitiesUrlV2, paramObj);
        return this.http.get(url)
            .map(response => response.json());
    }

    public cancelActivity(params: Object): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = this.urlParam.formUrl(this.activitiesUrlV2, params);
        return this.http.put(url, headers)
            .map(response => response.json());
    }
    public getDueSoonEvents(paramObj): Observable<any> {
        let url = this.urlParam.formUrl(this.activitiesUrl,
            paramObj);
        return this.http.get(url)
            .map(res => res.json().assignmentList);
    }

    public getScheduleOverdueCount(paramObj): Observable<any> {
        paramObj['type'] = 'scheduledOverdue';
        paramObj['action'] = 'count';
        let url = this.urlParam.formUrl(this.activitiesUrl, paramObj);
        return this.http.get(url)
            .map(res => res.json());
    }

    public getActivityApprovers(paramObj): Observable<any> {
        paramObj.category = 'approvers';
        let url = this.urlParam.formUrl(this.activitiesUrl, paramObj);
        return this.http.get(url)
            .map(res => res.json());
    }

    public nudgeActivity(paramObj: Object, body): Observable<any> {
        paramObj['action'] = 'nudge.json';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = this.urlParam.formUrl(this.activitiesUrl, paramObj);
        return this.http.post(url, body, headers).map(res => res.json());
    }

    public getActivities(paramObj): Observable<any> {
        let url = this.urlParam.formUrl(this.activitiesUrl,
            paramObj);
        return this.http.get(url)
            .map(response => response.json());
    }

    public assignActivity(params: Object): Observable<any> {
        let url = this.urlParam.formUrl(this.activitiesUrl, params);
        return this.http.get(url)
            .map(res => res.json());
    }
    public getCancelPer(paramObj): Observable<any> {
        let url = this.urlParam.formUrl(this.permissionUrl, paramObj);
        return this.http.get(url)
            .map(response => response.json());
    }

    public fileUpload(params: any, fileArray): Observable<any> {
        return this.http.post(this.fileUploadUrl,params)
            .map(response => response.json());
    }

    public editFileName(fileId,params: Object): Observable<any> {
        let urlEdit = this.fileUploadUrl+'/'+fileId;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put(urlEdit,params, headers)
            .map(response => response.json());
    }

    public deleteFile(fileId){
        let urlDelete = this.fileUploadUrl+ '/' + fileId;
        return this.http.delete(urlDelete).map(response => response.json());
    }

    private permissionUrl = this.BASE_URL + '/v2/specific-permission-assignment/:cancelId/:role';
    private activitiesUrl = this.BASE_URL + '/:id/:category/:type/:action';
    private activitiesUrlV2 = this.BASE_URL + '/v2/:id/:category';
    private fileUploadUrl  = this.BASE_FILE_URL + '/files'
}
