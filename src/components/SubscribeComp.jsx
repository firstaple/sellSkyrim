import {} from "./css/SubscribeComp.css";

const SubscribeComp = () => {
  const confirm = document.getElementById("confirmBox");
  const confirmButton = document.getElementById("btnSubmit");

  <div className="confirmBox">
    <form method="confirm">
      <p>1</p>
    </form>
  </div>;

  return (
    <div className="subscribeBox">
      <div className="subscribeTitle">
        <h3>News Retter</h3>
      </div>
      <div className="subscribeForm">
        <div className="inputWrap">
          <div className="emailArea">
            <label htmlFor="f_email" className="inputTitle">
              email
            </label>
            <br />
            <input
              type="text"
              id="f_email"
              className="inputText"
              placeholder="email"
            />
          </div>
          <div className="birthArea">
            <label htmlFor=""></label>
            <input type="hidden" name="_birthDay" id="birthDay" />
            <input type="hidden" id="year" data-bind="f_year" />
            <input type="hidden" id="Month" data-bind="f_month" />
            <input type="hidden" id="Day" data-bind="f_day" />
            <span id="birthDate" className="inputTitle">
              생년월일
            </span>
            <div className="dateWrap">
              <span className="customSelect1">
                <select
                  className="inputSelectCustomSelectDateCheck"
                  id="f_year"
                >
                  <option value="">년</option>
                  <option value="2022">2022</option>0
                  <option value="2021">2021</option>1
                  <option value="2020">2020</option>2
                  <option value="2019">2019</option>3
                  <option value="2018">2018</option>4
                  <option value="2017">2017</option>5
                  <option value="2016">2016</option>6
                  <option value="2015">2015</option>7
                  <option value="2014">2014</option>8
                  <option value="2013">2013</option>9
                  <option value="2012">2012</option>10
                  <option value="2011">2011</option>11
                  <option value="2010">2010</option>12
                  <option value="2009">2009</option>13
                  <option value="2008">2008</option>14
                  <option value="2007">2007</option>15
                  <option value="2006">2006</option>16
                  <option value="2005">2005</option>17
                  <option value="2004">2004</option>18
                  <option value="2003">2003</option>19
                  <option value="2002">2002</option>20
                  <option value="2001">2001</option>21
                  <option value="2000">2000</option>22
                  <option value="1999">1999</option>23
                  <option value="1998">1998</option>24
                  <option value="1997">1997</option>25
                  <option value="1996">1996</option>26
                  <option value="1995">1995</option>27
                  <option value="1994">1994</option>28
                  <option value="1993">1993</option>29
                  <option value="1992">1992</option>30
                  <option value="1991">1991</option>31
                  <option value="1990">1990</option>32
                  <option value="1989">1989</option>33
                  <option value="1988">1988</option>34
                  <option value="1987">1987</option>35
                  <option value="1986">1986</option>36
                  <option value="1985">1985</option>37
                  <option value="1984">1984</option>38
                  <option value="1983">1983</option>39
                  <option value="1982">1982</option>40
                  <option value="1981">1981</option>41
                  <option value="1980">1980</option>42
                  <option value="1979">1979</option>43
                  <option value="1978">1978</option>44
                  <option value="1977">1977</option>45
                  <option value="1976">1976</option>46
                  <option value="1975">1975</option>47
                  <option value="1974">1974</option>48
                  <option value="1973">1973</option>49
                  <option value="1972">1972</option>50
                  <option value="1971">1971</option>51
                  <option value="1970">1970</option>52
                  <option value="1969">1969</option>53
                  <option value="1968">1968</option>54
                  <option value="1967">1967</option>55
                  <option value="1966">1966</option>56
                  <option value="1965">1965</option>57
                  <option value="1964">1964</option>58
                  <option value="1963">1963</option>59
                  <option value="1962">1962</option>60
                  <option value="1961">1961</option>61
                  <option value="1960">1960</option>62
                  <option value="1959">1959</option>63
                  <option value="1958">1958</option>64
                  <option value="1957">1957</option>65
                  <option value="1956">1956</option>66
                  <option value="1955">1955</option>67
                  <option value="1954">1954</option>68
                  <option value="1953">1953</option>69
                  <option value="1952">1952</option>70
                  <option value="1951">1951</option>71
                  <option value="1950">1950</option>72
                  <option value="1949">1949</option>73
                  <option value="1948">1948</option>74
                  <option value="1947">1947</option>75
                  <option value="1946">1946</option>76
                  <option value="1945">1945</option>77
                  <option value="1944">1944</option>78
                  <option value="1943">1943</option>79
                  <option value="1942">1942</option>80
                  <option value="1941">1941</option>81
                  <option value="1940">1940</option>82
                  <option value="1939">1939</option>83
                  <option value="1938">1938</option>84
                  <option value="1937">1937</option>85
                  <option value="1936">1936</option>86
                  <option value="1935">1935</option>87
                  <option value="1934">1934</option>88
                  <option value="1933">1933</option>89
                  <option value="1932">1932</option>90
                  <option value="1931">1931</option>91
                  <option value="1930">1930</option>92
                  <option value="1929">1929</option>93
                  <option value="1928">1928</option>94
                  <option value="1927">1927</option>95
                  <option value="1926">1926</option>96
                  <option value="1925">1925</option>97
                  <option value="1924">1924</option>98
                  <option value="1923">1923</option>99
                  <option value="1922">1922</option>100
                </select>
              </span>
              <span className="customSelect2">
                <select
                  className="inputSelectCustomSelectDateCheck"
                  id="f_month"
                  aria-labelledby="birthDate"
                >
                  <option value="">월</option>
                  <option value="01">01</option>0<option value="02">02</option>1
                  <option value="03">03</option>2<option value="04">04</option>3
                  <option value="05">05</option>4<option value="06">06</option>5
                  <option value="07">07</option>6<option value="08">08</option>7
                  <option value="09">09</option>8<option value="10">10</option>9
                  <option value="11">11</option>10
                  <option value="12">12</option>
                  11
                </select>
              </span>
              <span className="customSelect3">
                <select
                  className="inputSelectCustomSelectDateCheck"
                  id="f_day"
                  aria-labelledby="birthDate"
                >
                  <option value="">일</option>
                  <option value="01">01</option>0<option value="02">02</option>1
                  <option value="03">03</option>2<option value="04">04</option>3
                  <option value="05">05</option>4<option value="06">06</option>5
                  <option value="07">07</option>6<option value="08">08</option>7
                  <option value="09">09</option>8<option value="10">10</option>9
                  <option value="11">11</option>10
                  <option value="12">12</option>
                  11
                  <option value="13">13</option>12
                  <option value="14">14</option>
                  13
                  <option value="15">15</option>14
                  <option value="16">16</option>
                  15
                  <option value="17">17</option>16
                  <option value="18">18</option>
                  17
                  <option value="19">19</option>18
                  <option value="20">20</option>
                  19
                  <option value="21">21</option>20
                  <option value="22">22</option>
                  21
                  <option value="23">23</option>22
                  <option value="24">24</option>
                  23
                  <option value="25">25</option>24
                  <option value="26">26</option>
                  25
                  <option value="27">27</option>26
                  <option value="28">28</option>
                  27
                  <option value="29">29</option>28
                  <option value="30">30</option>
                  29
                  <option value="31">31</option>30
                </select>
              </span>
            </div>
          </div>
        </div>
        <div className="agreeWrap">
          <div className="agreeLine1">
            <input
              type="checkbox"
              id="agree1"
              name="agree1"
              value="1"
              className="active"
            />
            <label htmlFor="agree1">
              &nbsp;개인 정보 수집 및 이용에 동의합니다.
            </label>
            <a className="detailJsPopupPolicy" data-open_popup="popupPolicy">
              자세히 보기
            </a>
          </div>
          <div className="agreeLineAgree2">
            <input
              type="checkbox"
              id="agree2"
              name="agree2"
              value="1"
              className="active"
            />
            <label htmlFor="agree2">
              &nbsp;새소식, 공지사항, 이벤트 등 관련 뉴스레터를 수신하는 것에
              동의합니다.
            </label>
          </div>
        </div>
        <div className="btnWrap">
          <button
            role="button"
            className="btnSubmit"
            id="btnSubmit"
            onClick={() => {
              confirm.showModal();
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeComp;
