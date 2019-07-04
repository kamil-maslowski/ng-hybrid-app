export class AppComponent implements ng.IComponentController, ng.IComponentOptions {
    static selector = 'app';

    controller: ng.Injectable<ng.IControllerConstructor> = AppComponent;
    template: string = `
        <h1>Upgrade me!</h1>
        <div>
            <what-am-i></what-am-i>
            <what-id-like-to-be></what-id-like-to-be>
        </div>
    `;
}
