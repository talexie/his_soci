import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OrgUnitTree } from '@dhis2/d2-ui-org-unit-tree';

class AvailableOrganisationUnitsTree extends Component {
    static propTypes = {
        onChange: PropTypes.func,
    }

    static defaultProps = {
        onChange: null,
    }

    state = {
        selected: [],
        rootWithMember: null,
    }
    componentDidMount() {
        this.getUserOrganisationUnits();
    }
    getUserOrganisationUnits=async()=>{
        const { d2 }  = this.props;
        const api = d2.Api.getApi();
        const currentUser= await api.get('me?fields=id,displayName,dataViewOrganisationUnits[id]');
        const loggedInUser = await currentUser;
        if (this.state.rootWithMember === null) {
            d2.models.organisationUnits
                .list({
                    paging: false,
                    filter: `id:eq:${loggedInUser.dataViewOrganisationUnits[0].id}`,
                    fields:
                        'id,displayName,path,organisationUnitGroups[id,name],children::isNotEmpty,memberCount',
                })
                .then(organisationUnitsResponse => {
                    const organisationUnits = organisationUnitsResponse.toArray()
                    this.setState({
                        rootWithMembers: organisationUnits[0],
                    })
                })
                .catch((error) => {
                    console.log("error:", error);
                })
        }
    }
    handleOrgUnitClick=(event, orgUnit)=> {
        if (!this.state.selected.includes(orgUnit.path)) {
            this.setState({ selected: [orgUnit.path] });
        }
        this.props.onChange(orgUnit);
    }

    render() {
        const { rootWithMembers, selected } = this.state;
        if (this.state.rootWithMembers) {
            return (
                <div>
                    <OrgUnitTree
                        hideMemberCount={Boolean(false)}
                        root={rootWithMembers}
                        selected={selected}
                        initiallyExpanded={[
                            `/${rootWithMembers.id}`,
                        ]}
                        onSelectClick={this.handleOrgUnitClick}
                    />
                </div>
            )
        }

        return <span>{'Loading Organisation Units Tree...'}</span>
    }
}

export default AvailableOrganisationUnitsTree