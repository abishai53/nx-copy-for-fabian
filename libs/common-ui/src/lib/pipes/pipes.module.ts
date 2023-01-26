import {NgModule} from '@angular/core'
import {FilterPipe} from './filter.pipe'
import {MaxPipe} from './max.pipe'

@NgModule({
    declarations: [FilterPipe, MaxPipe],
    exports: [FilterPipe, MaxPipe]
})
export class PipesModule {}