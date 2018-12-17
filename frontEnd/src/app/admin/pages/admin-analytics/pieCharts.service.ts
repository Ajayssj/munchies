import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../user/auth.service';

@Injectable()
export class ChartsService {
    constructor(private http: HttpClient, private auth: AuthService) { }
planSelectedOptions = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        // data: ['1 week', '4 week', '12 week']
        data:[]
    },
    roseType: 'angle',
    series: [
        {
            name: 'Plans',
            type: 'pie',
            radius: [0, '50%'],
            data: [
                // { value: 235, name: '1 week' },
                // { value: 210, name: '4 week' },
                // { value: 162, name: '12 week' }
            ]
        }
    ]
}
allergyOptions = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        // data: ['Milk', 'Eggs', 'Peanuts', 'Other Nuts', 'Wheat']
        data: []
    },
    roseType: 'angle',
    series: [
        {
            name: 'Allergy',
            type: 'pie',
            radius: [0, '50%'],
            data: [
                // { value: 235, name: 'Milk' },
                // { value: 210, name: 'Eggs' },
                // { value: 162, name: 'Peanuts' },
                // { value: 100, name: 'Other Nuts' },
                // { value: 50, name: 'Wheat' }
            ]
        }
    ]
}
fruitOptions = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        // data: ['Banana', 'Apple', 'Pear', 'Guava', 'Mango']
        data: []
    },
    roseType: 'angle',
    series: [
        {
            name: 'Fruits',
            type: 'pie',
            radius: [0, '50%'],
            data: [
                // { value: 143, name: 'Banana' },
                // { value: 178, name: 'Apple' },
                // { value: 240, name: 'Pear' },
                // { value: 100, name: 'Guava' },
                // { value: 300, name: 'Mango' }
            ]
        }
    ]
}
    monthWiseTrafficOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            
                type: 'shadow'      
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                // type: 'value',
                type: 'value',
                data: [0, 1000, 2000],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        series: [
            {
                name: 'abc',
                type: 'bar',
                barWidth: '20%',
                data: [10, 1000, 200, 334]
            }
        ]
    };
    getAllPlans(cb) {
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/used/plan')
        .subscribe((res: any) => {
            console.log(res.data);
            if(res.success){
                res.data.forEach(plan => {
                    this.planSelectedOptions.legend.data.push(plan.planInfo.title.toUpperCase());
                    this.planSelectedOptions.series[0].data.push({ value: plan.count, name: plan.planInfo.title.toUpperCase() });
                });
                console.log(this.planSelectedOptions)
                cb(this.planSelectedOptions);
            }else{
                cb(this.planSelectedOptions);
            }
            
        },
        err => {

    });
    }
    getAllergic(cb) {
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/allergic')
        .subscribe((res: any) => {
            console.log(res.data);
            if(res.success) {
                res.data.forEach(allergicItem => {
                    if(allergicItem && allergicItem._id) {
                        this.allergyOptions.legend.data.push(allergicItem && allergicItem._id ? allergicItem._id.toUpperCase() :'');
                        this.allergyOptions.series[0].data.push({value: allergicItem.count, name: allergicItem && allergicItem._id ? allergicItem._id.toUpperCase() :'' });
                    }
                });
                console.log(this.allergyOptions)
                cb(this.allergyOptions);
            }
            else {
                cb(this.allergyOptions);
            }
        },
        err => {

        });        
    }
    getFruitsLikedMost(cb) {
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/liked/fruits')
        .subscribe((res: any) => {
            console.log(res.data);
            if(res.success) {
                res.data.forEach(fruitsItem => {
                    if(fruitsItem && fruitsItem._id) {
                        this.fruitOptions.legend.data.push( fruitsItem && fruitsItem._id ? fruitsItem._id.toUpperCase() :"");
                        this.fruitOptions.series[0].data.push({value: fruitsItem.count, name:fruitsItem && fruitsItem._id ? fruitsItem._id.toUpperCase() :""});
                    }
                });
                console.log(this.fruitOptions);
                cb(this.fruitOptions);
            }   
            else {
                cb(this.fruitOptions);
            }
        },
        err => {

        });        
    }
}