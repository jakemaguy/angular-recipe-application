import { Directive, HostListener, HostBinding, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    @Input() openedFlag: boolean;
    @HostBinding('class.open') opened = this.openedFlag;

    ngOnInit() {
        this.openedFlag = false;
    }

    @HostListener('click') mouseClick(data: Event) {
        this.openedFlag = !this.openedFlag;
    }
}
