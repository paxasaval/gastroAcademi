import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from "@angular/common/http";
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CountdownModule} from 'ngx-countdown';
import {MatSelectModule} from '@angular/material/select';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IvyCarouselModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    NzTreeSelectModule,
    NzSelectModule,
    NzTagModule,
    MatDialogModule,
    CountdownModule
  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IvyCarouselModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    NzTreeSelectModule,
    NzSelectModule,
    NzTagModule,
    MatDialogModule,
    CountdownModule
  ]
})
export class MaterialModule { }
