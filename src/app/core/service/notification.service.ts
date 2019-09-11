import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    /**
     * Constructor
     * @param toast  Toaster
     */
    constructor(private toastr: ToastrService) { }

    show(message: string) {
        return this.toastr.success(message);
    }
    success(message: string) {
        return this.toastr.success(message, 'Success');
    }
    error(message: string) {
        return this.toastr.error(message, 'Error');
    }
    warning(message: string) {
        return this.toastr.warning(message, 'Warning');
    }
    info(message: string) {
        return this.toastr.info(message, 'Information');
    }
}