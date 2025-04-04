import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { FlightComponent } from './flight/flight.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HotelComponent } from './hotel/hotel.component';
import { RentalComponent } from './rental/rental.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about/:id', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'Flight', component: FlightComponent },
    { path: 'Hotel', component: HotelComponent },
    { path: 'Holiday', component: HolidayComponent },
    {
        path:'rental', component:RentalComponent
    }
];
