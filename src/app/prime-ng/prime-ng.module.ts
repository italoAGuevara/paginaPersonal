import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DockModule } from 'primeng/dock';
import { FieldsetModule } from 'primeng/fieldset';
import { GalleriaModule } from 'primeng/galleria';
import { ListboxModule } from 'primeng/listbox';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { RippleModule } from 'primeng/ripple';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabMenuModule } from 'primeng/tabmenu';
import { TimelineModule } from 'primeng/timeline';
/**
 * Se centralizan  los modulos de primgn para luego hacer mucho mas fácil y legible la importación
 * en donde se requieran, ya que solo tendrían que importar este modulo.
 */
@NgModule({
  exports: [
    AccordionModule,
    ButtonModule,
    CardModule,
    DataViewModule, 
    DockModule,
    FieldsetModule,
    GalleriaModule,
    ListboxModule, 
    OrganizationChartModule,
    RippleModule,
    ScrollPanelModule,
    SplitterModule,
    TabMenuModule,
    TimelineModule
  ]
})
export class PrimeNgModule { }
