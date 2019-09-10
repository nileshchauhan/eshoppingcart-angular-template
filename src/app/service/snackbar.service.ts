import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { Component } from '@angular/compiler/src/core';
import { SnackbarComponent } from '../shared/snackbar/snackbar.component';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    constructor(private snackbar: MatSnackBar) {

    }

    openSnackBar(message: string, type: string) {
        this.snackbar.openFromComponent(SnackbarComponent, {
            duration: 4 * 1000,
            data: { "message": message, "type": type },
        });
    }
}