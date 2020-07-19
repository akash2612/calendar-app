import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public dateArr:Array<any> = [];
  public dt:Date = new Date();
  public currDate = this.dt.getDate();
  public currMonth = this.dt.getMonth();
  public currYear = this.dt.getFullYear();
  public mn = this.dt.getMonth();
  public yr = this.dt.getFullYear();
  public monthVal:string = '';
  public monthData:any = {
    'Jan':31,
    'Feb':this.yr%4 === 0 ? 29 : 28,
    'Mar':31,
    'Apr':30,
    'May':31,
    'Jun':30,
    'Jul':31,
    'Aug':31,
    'Sep':30,
    'Oct':31,
    'Nov':30,
    'Dec':31
  }
  constructor() { 
    this.calendarFunc();
  }

  ngOnInit() {
  }

  calendarFunc() {
    this.dt = new Date(this.yr,this.mn);
    this.monthVal = String(Object.keys(this.monthData)[this.mn]);
    var nextmnFlag = false;
    

    var firstDay = new Date(this.yr,this.mn,1);
    var lastDay = new Date(this.yr,this.mn+1,0);

    // console.log(firstDay.getDate(),lastDay.getDate());

    

    var count = 1;
    var firstDt = firstDay.getDay();
    var nextMonthVal = 0;
    var prevMonthVal = this.mn === 0 ? Number(Object.values(this.monthData)[11]) : Number(Object.values(this.monthData)[this.mn-1]);

    // console.log(prevMonthVal);

    if(firstDt !== 0) {
      for(let i=firstDt-1;i>=0;i--) {
        this.dateArr[i] = {'dateNo':prevMonthVal,'dateObj':String(new Date(this.yr,this.mn-1,prevMonthVal)),'currDt':(this.currDate === prevMonthVal && this.currMonth === this.mn-1),'currMn':false};
        prevMonthVal--;
      }
    }
    for(let i=firstDay.getDay();i<lastDay.getDate()+firstDay.getDay();i++) {
      this.dateArr[i] = {'dateNo':count,'dateObj':String(new Date(this.yr,this.mn,count)),'currDt':(this.currDate === count && this.currMonth === this.mn),'currMn':true};
      count++;
      if(count > lastDay.getDate()) {
        // console.log(count,this.dateArr.length);
        if(this.dateArr.length%7 === 0) {
          nextmnFlag = false;
        }else {
          this.dateArr.length += (7-(this.dateArr.length%7));
          nextmnFlag = true;
        }
        nextMonthVal = i;
        count = 1;
        // console.log('array:'+this.dateArr.length,'nexmnthval:'+nextMonthVal,nextmnFlag);
      }      
    }
    if(nextmnFlag === true && nextMonthVal < this.dateArr.length) {
      for(let i = nextMonthVal+1;i<this.dateArr.length;i++) {
        this.dateArr[i] = {'dateNo':count,'dateObj':String(new Date(this.yr,this.mn+1,count)),'currDt':(this.currDate === count && this.currMonth === this.mn+1),'currMn':false};;
        count++;
      }
    }

    // console.log(this.dateArr);
  }

  changeMnth(m,y,event) {
    var tg = event.currentTarget;
    this.dateArr = [];
    if(tg.attributes.class.nodeValue === 'btn-next') {
      if(this.mn === 11) {
        this.mn = 0;
        this.yr++;
        this.monthData['Feb']= this.yr%4 === 0 ? 29 : 28;
      }else {
        this.mn++;
      }
    }
    if(tg.attributes.class.nodeValue === 'btn-prev') {
      if(this.mn === 0) {
        this.mn = 11;
        this.yr--;
        this.monthData['Feb']= this.yr%4 === 0 ? 29 : 28;
      }else {
        this.mn--;
      }
    }
    this.monthVal = String(Object.keys(this.monthData)[this.mn]);
    this.calendarFunc();
  }

}
