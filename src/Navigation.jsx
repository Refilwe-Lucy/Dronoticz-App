function navigation({ scrollToSection }) {
    return (
      <nav>
        <ul>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          
          
        </ul>
      </nav>
    );
  }
  
  export default navigation;