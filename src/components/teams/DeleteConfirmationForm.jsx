const DeleteConfirmationForm = ({ onConfirm, onCancel }) => (
    <form>
        <p>Are you sure you want to delete this team?</p>
        <label>
            Delete
            <input type="submit" />
        </label>
    </form>
)

export default DeleteConfirmationForm;