export class WhatAmIComponent implements ng.IComponentController, ng.IComponentOptions {
    static selector = 'whatAmI';

    controller: ng.Injectable<ng.IControllerConstructor> = WhatAmIComponent;
    template: string = `
        <h2>I'm an ng1 app</h2>
    `;
}
