import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Campaigns } from '../../collections/campaigns';
import { Link } from 'react-router';

class CampaignList extends Component{


	onCampaignRemove(campaign){
		Meteor.call('campaigns.remove', campaign);
	}

	renderList(){
		return this.props.campaigns.map( campaign => {

			const url = `/campaign/${campaign._id}`;

			return (
				<li className="list-group-item" key={campaign._id}>
				<Link to={url}>Campaign - { campaign.name } </Link>
				<span className="pull-right">
						<button
						className="btn btn-danger"
						onClick={() => this.onCampaignRemove(campaign)}>
						Remove
						</button>
				</span>
				</li>
			);	
		});
	}
render(){
	return(
		<ul className="list-group">
			{this.renderList()}
		</ul>
		);
}
}

export default createContainer(() => {
	Meteor.subscribe('campaigns');
	Meteor.subscribe('sharedCampaigns');

	return { campaigns: Campaigns.find({}).fetch() }
}, CampaignList);