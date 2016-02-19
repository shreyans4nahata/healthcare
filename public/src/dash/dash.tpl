<div ng-controller="AccountController as account">
  <div style="margin:5%;"  ng-if="account.loggedin">
    <!-- <a href="#/booking"><button class="mui-btn mui-btn--raised">Book Now!</button></a> -->
 <div id="flip-scroll" class="mui-panel">

    <table class="mui-table" style="margin:15px;">
        <thead>
            <tr>
                <th>Tags</th>
                <th>Problem</th>
                <th>Date</th>
                <th>Ratings</th>
            </tr>
        </thead>
        <tbody id="bookings" ng-repeat = "result in dash.results" >
            <tr>
                <td>{{result.tags}}</td>
                <td>{{result.problem}}</td>
                <td>{{result.date}}</td>
                <td>{{result.rating}}</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
<div  ng-if="!account.loggedin">
    {{account.loggedin}}
 <a href="#/user"><button class="mui-btn mui-btn--raised">Please Login To Continue!!!</button></a>
</div>
</div>
