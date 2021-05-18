import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { NavbarItem } from '../models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public currentItem: NavbarItem | undefined;
  public items: NavbarItem[] = [
    {
      id: 0,
      link: '/',
      title: 'Home',
    },
    {
      id: 1,
      link: '/rate-monotonic',
      title: 'Rate-monotonic',
    },
    {
      id: 2,
      link: '/earliest-deadline-first',
      title: 'Earliest deadline first',
    },
  ];

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.activatedRoute.snapshot.url, this.router.url);
    this.watchNavigationChanges();
  }

  ngOnInit(): void {}

  public itemClicked(item?: NavbarItem): void {
    if (item && item.id !== this.currentItem?.id) {
      this.title.setTitle(`Real Time Scheduling | ${item.title}`);
      this.currentItem = item;
    }
  }

  private watchNavigationChanges(): void {
    this.router.events
      .pipe(filter((val) => val instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        this.itemClicked(this.items.find((item) => item.link === url));
      });
  }
}
