import Cmp from '../components/base-component';
import * as Validation from '../util/validation';
import { autobind as Autobind } from '../decorators/autobind';
import { projectState } from '../state/project-state';

export class ProjectInput extends Cmp<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');

        this.titleInputElement = this.element.querySelector(
            '#title'
        ) as HTMLInputElement;

        this.descriptionInputElement = this.element.querySelector(
            '#description'
        ) as HTMLInputElement;

        this.peopleInputElement = this.element.querySelector(
            '#people'
        ) as HTMLInputElement;
        this.configure();
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    private getherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidatable: Validation.Validatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable: Validation.Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidatable: Validation.Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5,
        };

        if (
            !Validation.validate(titleValidatable) ||
            !Validation.validate(descriptionValidatable) ||
            !Validation.validate(peopleValidatable)
        ) {
            alert('Invalid input, please try again!');
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    private clearInput() {
        this.element.reset();
    }

    @Autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        // 此處的 this 並非為 ProjectInput 需要用bind修正
        const userInput = this.getherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            projectState.addProject(title, desc, people);
            this.clearInput();
        }
    }

    renderContent() {}
}
