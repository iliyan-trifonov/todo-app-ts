export default class TODO {
    private text: string;

    public constructor(text: string) {
        this.text = text;
    }

    public getText = (): string =>
        this.text;

}