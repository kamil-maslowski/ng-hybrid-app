export class AppComponent implements ng.IComponentController, ng.IComponentOptions {
    static selector = 'app';

    controller: ng.Injectable<ng.IControllerConstructor> = AppComponent;
    template: string = `
        <h1>Upgrade me!</h1>
        <div>
            <what-am-i></what-am-i>
            <h2>I'd like to be ng6 app :(</h2>
        </div>
    `;
}
