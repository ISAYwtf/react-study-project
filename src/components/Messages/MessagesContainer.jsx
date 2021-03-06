import {sendMessageTC} from "../../redux/Dialogs/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../redux/Dialogs/dialogs-selectors";

const mapStateToProps = state => ({dialogsPage: getDialogsPage(state)});

const mapDispatchToProps = {sendMessageTC};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);
