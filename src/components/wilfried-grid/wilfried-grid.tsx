import { Component, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'wilfried-grid',
  styleUrl: 'wilfried-grid.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class WilfriedGrid {
  
  render() {
    return (
      <div class="main-wrapper">
			<section class="section">
				<div class="grid-wrapper">
					<div class="logo-wrapper">
						<img class="logo" src={getAssetPath('./images/logo.svg')} alt="" />
					</div>
					<div class="content">
						<h1 class="title">CONTENT TITLE H1</h1>
						<p class="description">This is where the description goes. Keep it short and sweet.</p>
					</div>
					<div class="credit">
						PRESENTED BY <br />
						Full Name <br />
						Role
						<hr />
						<span>BG image is by <a href="https://unsplash.com/@aznbokchoy">Lucas Benjamin</a></span>
					</div>
				</div>
			</section>
		</div>	
    )
  }
}
