import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../service/starwars.service'
import { FormControl, FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {
  public results:Object;
  
  searchForm: FormGroup;
  
  constructor( private starWarsService:StarWarsService, private fb: FormBuilder) { }
  
  ngOnInit(){
    this.searchForm= this.fb.group({
      type: new FormControl(),
      search: new FormControl()
    })
    
    
  }
      onCreateSearch(){
        this.starWarsService.getPeople(this.searchForm.value.type, this.searchForm.value.search) 
        .subscribe((resdata => {this.results = resdata})
          )  }
    