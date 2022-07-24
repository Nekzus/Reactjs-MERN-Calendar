import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {
    const { user } = useAuthStore();
    const { startDeletingEvent, hasEventSelected, activeEvent } =
        useCalendarStore();
    const { isDateModalOpen } = useUiStore();

    const handleDelete = () => {
        startDeletingEvent();
    };

    const isMyEvent =
        user.uid === activeEvent?.user._id ||
        user.uid === activeEvent?.user.uid;

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handleDelete}
            style={{
                display:
                    hasEventSelected && !isDateModalOpen && isMyEvent
                        ? ''
                        : 'none',
            }}
        >
            <i className="fas fa-trash-alt"></i>
        </button>
    );
};
