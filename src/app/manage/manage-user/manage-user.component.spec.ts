// import { TestBed, async, ComponentFixture } from "@angular/core/testing";
// import { ManageUserComponent } from './manage-user.component';
// import { AuthenticationService } from 'src/app/service/authentication.service';
// import { UserService } from 'src/app/service/user.service';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

// class MockAuthenticationService {
//     isAuthenticated: true;
// }


// describe('manage user', () => {

//     let fixture: ComponentFixture<ManageUserComponent>;
//     let appComponent: ManageUserComponent;
    
    
//     beforeEach(async(() => {
        
    
//         TestBed.configureTestingModule({
//             declarations: [ManageUserComponent],
//             imports: [HttpClientModule], schemas: []
//         }).compileComponents().then(() => {
//             fixture = TestBed.createComponent(ManageUserComponent);
//             appComponent = fixture.componentInstance;
//             fixture.detectChanges();
//         });
//     }));


//     it('should create the manage user', async(() => {
//         expect(appComponent).toBeTruthy();
//     }));

//     it(`should have as title`, async(() => {
//         expect(appComponent.title).toEqual('manage-user-component');
//     }));

//     it('should check user name', async(() => {
//         const compiled = fixture.debugElement.nativeElement;
//         fixture.detectChanges();
//         // authService.retu
        
//         // expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-testing-with-material!');
//     }));
// });