import { Component, OnInit, Type } from '@angular/core';
import { Country } from 'src/app/models/Country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  public countries: Country[] = [] as Country[];
  public errorMessage:string | undefined;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((data)=>{
      this.countries = data;
    }, (error)=> {
      this.errorMessage = error;
    });
  }

}
