import { h, render, Component } from 'preact';

export default class AddFeature extends Component {
	render() {
		return (
			<div class='columns'>
				<div className="column">
					<div className="content">
						add feature:
					</div>
				</div>

				<div className="column">
					<div class="dropdown">
						<div class="dropdown-trigger">
							<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
								<span>Dropdown button</span>
								<span class="icon is-small">
									<i class="fas fa-angle-down" aria-hidden="true"></i>
								</span>
							</button>
						</div>
						<div class="dropdown-menu" id="dropdown-menu" role="menu">
							<div class="dropdown-content">
								<a href="#" class="dropdown-item">
									Dropdown item
								</a>
								<a class="dropdown-item">
									Other dropdown item
								</a>
								<a href="#" class="dropdown-item is-active">
									Active dropdown item
								</a>
								<a href="#" class="dropdown-item">
									Other dropdown item
								</a>
								<hr class="dropdown-divider">
									<a href="#" class="dropdown-item">
										With a divider
									</a>
								</hr>
							</div>
						</div>
					</div>
				</div>

				<div className="column">
					<a className="button" href="">add</a>
				</div>
			</div>
		);
	}
}