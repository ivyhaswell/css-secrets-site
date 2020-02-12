import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

export const animamtions = [
    trigger('pageAnimations', [
        transition(':enter', [
            query('li', [
                style({ opacity: 0, transform: 'translateY(100px)' }),
                stagger(30, [
                    animate('500ms cubic-bezier(0.35,0,0.25,1)'),
                    style({ opacity: 1, transform: 'none' })
                ])
            ])
        ])
    ])
]