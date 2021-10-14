import {Link
} from "react-router-dom";
function Task() {
    return (
        <div id="principal">
            <form>
                    <legend>Add Task</legend>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Name</label>
                        <input type="text" id="TextInput" class="form-control" placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Description</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Description" />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Due Date</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Due Date" />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">AssignedTo</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="AssignedTo" />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Status</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Status" />
                    </div>                

                    <Link  class="btn btn-primary" to="/">Submit</Link>
            </form>
        </div>
    )
}
export default Task;
