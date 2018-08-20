import { Directive, HostBinding, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: 'kzsidenav',
  exportAs: "kzsidenav"
})
export class KZSidenavDirective implements OnInit {
  @HostBinding("class") class = "kzsidenav";
  @HostBinding("attr.id") id = "kzsidenav";

  // DOM ELEMENTS
  __kzSidenav: any;
  __kzMain: any;

  @Input("mode") _mode: string;
  @Input("position") _position: string;
  @Input("state") _state: string;
  @Input("openSize") _openSize: string;
  @Input("closeSize") _closeSize: string;
  @Input("hoverAnimation") _hoverAnimation: string;

  @HostListener("mouseover")
  navOpen() {
    if (typeof (this._hoverAnimation) != "undefined" && this._state == 'close')
      this.openNav();
  }
  @HostListener("mouseout")
  navClose() {
    if (typeof (this._hoverAnimation) != "undefined" && this._state == 'close')
      this.closeNav();
  }


  constructor(kzSidenav: ElementRef) {
    this.__kzSidenav = kzSidenav.nativeElement;
  }

  ngOnInit() {
    this.__kzMain = this.__kzSidenav.nextElementSibling;
    // Sidenav Mode Property
    this._mode = (typeof (this._mode) == "undefined") ? "push" : this._mode;
    // Sidenav Position Property
    this._position = (typeof (this._position) == "undefined") ? "left" : this._position;
    if (this._position == "left") {
      this.__kzSidenav.style.right = "unset";
      this.__kzSidenav.style.left = "0";

    } else {
      this.__kzSidenav.style.left = "unset";
      this.__kzSidenav.style.right = "0";
    }
    // Sidenav Open Size Property
    this._openSize = (typeof (this._openSize) == "undefined") ? "250px" : this._openSize;
    // Sidenav Close Size Property
    this._closeSize = (typeof (this._closeSize) == "undefined") ? "0" : this._closeSize;
    // Sidenav State Property
    this._state = (typeof (this._state) == "undefined") ? "open" : this._state;
    if (this._state == "open") {
      this.open();

    } else {
      this.close();
    }
  }

  /**
   *  This function opens the sidenav as well as changing the state of the sidenav
   */
  public open(): void {
    this._state = "open";
    this.openNav();
  }

  /**
   *  This function closes the sidenav as well as changing the state of the sidenav
   */
  public close(): void {
    this._state = 'close';
    this.closeNav();
  }

  /**
   *  This function toggles the sidenav as well as changing the state of the sidenav
   */
  public toggle(): void {
    switch (this._state) {
      case 'open':
        this.close();
        break;
      case 'close':
        this.open();
        break;
    }
  }

  /**
   *  This function returns the current state of the sidenav
   */
  public currentState(): string {
    return this._state;
  }

  /**
   *  This function opens the sidenav without changing the state of the sidenav
   */
  private openNav(): void {
    switch (this._mode) {
      case 'overlay':
        this.__kzSidenav.style.width = this._openSize;
        break;
      case 'push':
        this.__kzSidenav.style.width = this._openSize;
        if (this._position == "left") {
          this.__kzMain.style.marginRight = "unset";
          this.__kzMain.style.marginLeft = this._openSize;
        } else {
          this.__kzMain.style.marginLeft = "unset";
          this.__kzMain.style.marginRight = this._openSize;
        }
        break;
      case 'push-with-opacity':
        this.__kzSidenav.style.width = this._openSize;
        if (this._position == "left") {
          this.__kzMain.style.marginRight = "unset";
          this.__kzMain.style.marginLeft = this._openSize;
        } else {
          this.__kzMain.style.marginLeft = "unset";
          this.__kzMain.style.marginRight = this._openSize;
        }
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        break;
      case 'full':
        this.__kzSidenav.style.width = "100%";
        break;
      default:
        this.__kzSidenav.style.width = this._openSize;
        break;
    }
  }

  /**
   *  This function closes the sidenav without changing the state of the sidenav
   */
  private closeNav(): void {
    switch (this._mode) {
      case 'overlay':
        this.__kzSidenav.style.width = this._closeSize;
        break;
      case 'push':
        this.__kzSidenav.style.width = this._closeSize;
        this.__kzMain.style.marginLeft = this._closeSize;
        if (this._position == "left") {
          this.__kzMain.style.marginRight = "unset";
          this.__kzMain.style.marginLeft = this._closeSize;
        } else {
          this.__kzMain.style.marginLeft = "unset";
          this.__kzMain.style.marginRight = this._closeSize;
        }
        break;
      case 'push-with-opacity':
        this.__kzSidenav.style.width = this._closeSize;
        if (this._position == "left") {
          this.__kzMain.style.marginRight = "unset";
          this.__kzMain.style.marginLeft = this._closeSize;
        } else {
          this.__kzMain.style.marginLeft = "unset";
          this.__kzMain.style.marginRight = this._closeSize;
        }
        document.body.style.backgroundColor = "unset";
        break;
      case 'full':
        this.__kzSidenav.style.width = this._closeSize;
        break;
      default:
        this.__kzSidenav.style.width = this._closeSize;
        break;
    }
  }
}
