import { Injectable } from '@angular/core';

@Injectable()
export class ChartsService {
planSelectedOptions = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['1 week', '4 week', '12 week']
    },
    roseType: 'angle',
    series: [
        {
            name: 'PieChart',
            type: 'pie',
            radius: [0, '50%'],
            data: [
                { value: 235, name: '1 week' },
                { value: 210, name: '4 week' },
                { value: 162, name: '12 week' }
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
        data: ['Milk', 'Eggs', 'Peanuts', 'Other Nuts', 'Wheat']
    },
    roseType: 'angle',
    series: [
        {
            name: 'PieChart',
            type: 'pie',
            radius: [0, '50%'],
            data: [
                { value: 235, name: 'Milk' },
                { value: 210, name: 'Eggs' },
                { value: 162, name: 'Peanuts' },
                { value: 100, name: 'Other Nuts' },
                { value: 50, name: 'Wheat' }
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
        data: ['Banana', 'Apple', 'Pear', 'Guava', 'Mango']
    },
    roseType: 'angle',
    series: [
        {
            name: 'PieChart',
            type: 'pie',
            radius: [0, '50%'],
            data: [
                { value: 143, name: 'Banana' },
                { value: 178, name: 'Apple' },
                { value: 240, name: 'Pear' },
                { value: 100, name: 'Guava' },
                { value: 300, name: 'Mango' }
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
                yAxisTicks: [0, 1000, 2000]
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
    getpPlanSelectedOptionsOption() {
        return this.planSelectedOptions;
    }
    getpAllergyOptionsOption() {
        return this.allergyOptions;
    }
    getpFruitOptionsOption() {
        return this.fruitOptions;
    }
    getMonthWiseTrafficOptionsOption() {
        return this.monthWiseTrafficOption;
    }
}