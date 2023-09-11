import { HttpResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

export class ErrorHandler {
    static handleError(error: Response | any) {
        let errorMessage: string;
        
        if (error instanceof Response) {
            errorMessage = `Error ${error.status} trying to access the URL ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}