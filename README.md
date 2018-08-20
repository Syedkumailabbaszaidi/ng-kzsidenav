# ng-kzsidenav

An Angular sidenav component

## Installation

```shell
npm install --save ng-kzsidenav
```

## Usage
Import `KZSidenavModule` into your App module:

```typescript
...
import { KZSidenavModule } from 'ng-kzsidenav';

@NgModule({
    ...
    imports: [
      ...,
      KZSidenavModule
    ],
      ...
})
class AppModule {}
```
Add `ng-kzsidenav.css` into your angular.json

```typescript
...
"styles": [
            "node_modules/ng-kzsidenav/ng-kzsidenav.css",
            ...
],
...
```


In your component's html, simply use `<kzsidenav>` wrapper and place your sidenav content within it. Your page content should be placed within a div having id `kzmain`. Inorder to use functions of sidenav like toggeling the open/close functionality add a reference to `kzsidenav` inside `<kzsidenav>`.

```typescript
@Component({
  selector: 'app',
  template: `
        <style>
        /* CSS For Demo Purpose */
            .kzsidenav a {
                padding: 8px 8px 8px 32px;
                text-decoration: none;
                font-size: 25px;
                color: #818181;
                display: block;
                transition: 0.3s;
            }
            .kzsidenav a:hover {
                color: #f1f1f1;
            }
            .kzsidenav .closebtn {
                position: absolute;
                top: 0;
                right: 25px;
                font-size: 36px;
                margin-left: 50px;
            }
        </style>
        <kzsidenav #kzsidenav="kzsidenav">
        <!-- This code is for demo purpose. You can create your sidenav here after removing <a> tags -->
            <a href="javascript:void(0)" class="closebtn" (click)="kzsidenav.close()">&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </kzsidenav>
        <div id="kzmain">
        <!-- This code is for demo purpose. You can put your main content here after removing the content inside <div id="kzmain">  -->
            <span (click)="kzsidenav.open()">open</span>
            <div style="text-align:center;">
                <h1> Welcome to App!</h1>
                <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
            </div>
            <h2>Here are some links to help you start: </h2>
            <ul>
                <li>
                    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
                </li>
                <li>
                    <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
                </li>
                <li>
                    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
                </li>
            </ul>
        </div>
  `
})
```

## Functions

The kzsidenav has a few public functions:

| Function | Description |
| -------- | ----------- |
| `open()` | Opens the sidenav. |
| `close()` | Closes the sidenav. |
| `toggle()` | toggles the sidenav. |
| `currentState()` | Returns the current state of sidenav. |

## Options

### Inputs

The kzsidenav has a few input properties:

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| mode | `overlay`, `push`, `push-with-opacity`, `full` | `push` | See the "Modes" section. |
| position | `left`, `right` | `left` | What side the sidenav should be docked to. |
| state | `open`,`close` | `open` | At what state the sidenav should be initialized when the page loads. |
| openSize | number | `250px` | Specify open width of sidenav with valid css dimension. |
| closeSize | number | `0` | Specify close width of sidenav with valid css dimension. |
| hoverAnimation | | | Whether to animate the sidenav on mouse enter and mouse leave when sidenav is closed. |

### Modes

#### `overlay`

The side navigation slides in over the page content.

#### `push`

This is the default mode. The page content is pushed to make space for the side navigation.

#### `push-with-opacity`

The page content is pushed to make space for the side navigation with black background and opacity to highlight side navigation.

#### `full`

The side navigation slides and covers the whole page (100% width):