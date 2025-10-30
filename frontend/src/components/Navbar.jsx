





// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import Avatar from "@mui/material/Avatar";
// import { Link, useLocation } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import BookIcon from "@mui/icons-material/Book";
// import HomeIcon from "@mui/icons-material/Home";
// import RecommendIcon from "@mui/icons-material/Recommend";
// import LoginIcon from "@mui/icons-material/Login";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import LogoutIcon from "@mui/icons-material/Logout";
// import EmailIcon from "@mui/icons-material/Email";
// import PersonIcon from "@mui/icons-material/Person";
// import CloseIcon from "@mui/icons-material/Close";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import './Navbar.css'; // यह line add करें
// function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [profileAnchor, setProfileAnchor] = useState(null);
//   const [profileDialogOpen, setProfileDialogOpen] = useState(false);
//   const location = useLocation();

//   // LocalStorage से user data लें
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem('bookhub_user');
//     return savedUser ? JSON.parse(savedUser) : {
//       isLoggedIn: false,
//       username: "",
//       email: ""
//     };
//   });

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleProfileMenu = (event) => {
//     if (!user.isLoggedIn) {
//       alert("📚 Please signup or login first to access your profile!");
//       return;
//     }
//     setProfileAnchor(event.currentTarget);
//   };

//   const handleProfileClose = () => {
//     setProfileAnchor(null);
//   };

//   const handleProfileDialogOpen = () => {
//     setProfileDialogOpen(true);
//     handleProfileClose();
//   };

//   const handleProfileDialogClose = () => {
//     setProfileDialogOpen(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('bookhub_user');
//     setUser({ 
//       isLoggedIn: false, 
//       username: "", 
//       email: ""
//     });
//     alert("✅ Successfully logged out! We hope to see you again soon.");
//     handleProfileClose();
//   };

//   const handleWishlistClick = (e) => {
//     e.preventDefault();
//     alert("⭐ Wishlist feature coming soon!");
//     handleProfileClose();
//   };

//   const isActive = (path) => location.pathname === path;

//   const menuItems = [
//     { text: "Home", path: "/", icon: <HomeIcon /> },
//     { text: "Recommendations", path: "/recommend", icon: <RecommendIcon /> },
//     { text: "Login", path: "/login", icon: <LoginIcon /> },
//     { text: "SignUp", path: "/signup", icon: <PersonAddIcon /> },
//   ];

//   const drawer = (
//     <Box sx={{ width: 250, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', height: '100%' }}>
//       <Box sx={{ p: 2, textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//         <BookIcon sx={{ fontSize: 40, color: 'white', mb: 1 }} />
//         <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
//           BookHub
//         </Typography>
//         {user.isLoggedIn && (
//           <Typography variant="body2" sx={{ color: '#ffd700', mt: 1 }}>
//             Welcome, {user.username}
//           </Typography>
//         )}
//       </Box>
//       <List>
//         {menuItems.map((item) => (
//           <ListItem
//             key={item.text}
//             component={Link}
//             to={item.path}
//             onClick={handleDrawerToggle}
//             sx={{
//               borderLeft: isActive(item.path) ? '4px solid #ffd700' : 'none',
//               backgroundColor: isActive(item.path) ? 'rgba(255,255,255,0.1)' : 'transparent',
//               color: 'white',
//               '&:hover': {
//                 backgroundColor: 'rgba(255,255,255,0.15)',
//               }
//             }}
//           >
//             <Box sx={{ mr: 2, color: isActive(item.path) ? '#ffd700' : 'white' }}>
//               {item.icon}
//             </Box>
//             <ListItemText 
//               primary={item.text} 
//               sx={{
//                 '& .MuiListItemText-primary': {
//                   fontWeight: isActive(item.path) ? 'bold' : 'normal',
//                   color: isActive(item.path) ? '#ffd700' : 'white'
//                 }
//               }}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );


//   <IconButton
//   className={`profile-circle-icon ${user.isLoggedIn ? 'logged-in' : ''}`}
//   onClick={handleProfileMenu}
// >
//   <AccountCircleIcon />
// </IconButton>
//   return (
//     <>
//       <AppBar 
//         position="sticky" 
//         sx={{ 
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
//           backdropFilter: 'blur(10px)',
//         }}
//       >
//         <Toolbar sx={{ minHeight: { xs: '60px', sm: '80px' } }}>
//           {/* Mobile Menu Button */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* Logo */}
//           <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//             <BookIcon sx={{ fontSize: { xs: 28, sm: 36 }, mr: 1, color: '#ffd700' }} />
//             <Typography
//               variant="h4"
//               component={Link}
//               to="/"
//               sx={{
//                 flexGrow: 1,
//                 textDecoration: 'none',
//                 color: 'white',
//                 fontWeight: '900',
//                 background: 'linear-gradient(45deg, #fff 30%, #ffd700 90%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
//                 '&:hover': {
//                   background: 'linear-gradient(45deg, #ffd700 30%, #fff 90%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                 }
//               }}
//             >
//               BookHub
//             </Typography>
//           </Box>

//           {/* Desktop Menu */}
//           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 1, md: 2 }, alignItems: 'center' }}>
//             {menuItems.map((item) => (
//               <Button
//                 key={item.text}
//                 component={Link}
//                 to={item.path}
//                 startIcon={item.icon}
//                 sx={{
//                   color: 'white',
//                   fontWeight: isActive(item.path) ? 'bold' : 'normal',
//                   background: isActive(item.path) ? 'rgba(255,255,255,0.2)' : 'transparent',
//                   borderRadius: '25px',
//                   px: { sm: 2, md: 3 },
//                   py: 1,
//                   position: 'relative',
//                   overflow: 'hidden',
//                   fontSize: { sm: '0.8rem', md: '0.9rem' },
//                   '&:hover': {
//                     background: 'rgba(255,255,255,0.15)',
//                     transform: 'translateY(-2px)',
//                     boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
//                   },
//                   '&::before': isActive(item.path) ? {
//                     content: '""',
//                     position: 'absolute',
//                     bottom: 0,
//                     left: '50%',
//                     transform: 'translateX(-50%)',
//                     width: '30px',
//                     height: '3px',
//                     background: '#ffd700',
//                     borderRadius: '2px'
//                   } : {},
//                   transition: 'all 0.3s ease'
//                 }}
//               >
//                 {item.text}
//               </Button>
//             ))}
            
//             {/* Profile Menu */}
//             <IconButton
//               onClick={handleProfileMenu}
//               sx={{
//                 color: 'white',
//                 background: user.isLoggedIn ? 'rgba(255,215,0,0.2)' : 'rgba(255,255,255,0.1)',
//                 border: user.isLoggedIn ? '2px solid #ffd700' : '2px solid rgba(255,255,255,0.3)',
//                 width: { xs: '35px', sm: '40px', md: '45px', lg: '50px' },
//                 height: { xs: '35px', sm: '40px', md: '45px', lg: '50px' },
//                 '&:hover': {
//                   background: user.isLoggedIn ? 'rgba(255,215,0,0.3)' : 'rgba(255,255,255,0.2)',
//                   transform: 'scale(1.1) rotate(5deg)'
//                 },
//                 transition: 'all 0.3s ease'
//               }}
//             >
//               <AccountCircleIcon sx={{ 
//                 fontSize: { 
//                   xs: '1.2rem', 
//                   sm: '1.4rem', 
//                   md: '1.6rem', 
//                   lg: '1.8rem' 
//                 } 
//               }} />
//             </IconButton>
            
//             {user.isLoggedIn && (
//               <Menu
//                 anchorEl={profileAnchor}
//                 open={Boolean(profileAnchor)}
//                 onClose={handleProfileClose}
//                 sx={{
//                   '& .MuiPaper-root': {
//                     background: 'rgba(255,255,255,0.98)',
//                     backdropFilter: 'blur(20px)',
//                     borderRadius: '15px',
//                     marginTop: '10px',
//                     boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
//                     minWidth: { xs: '180px', sm: '200px' }
//                   }
//                 }}
//               >
//                 <Box sx={{ px: 2, py: 1, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
//                   <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#667eea', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
//                     {user.username}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
//                     {user.email}
//                   </Typography>
//                 </Box>

//                 <MenuItem onClick={handleProfileDialogOpen} sx={{ py: 1 }}>
//                   <PersonIcon sx={{ mr: 1, color: '#667eea', fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />
//                   <Typography variant="body1" sx={{ fontWeight: '500', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>My Profile</Typography>
//                 </MenuItem>
                
//                 <MenuItem onClick={handleWishlistClick} sx={{ py: 1 }}>
//                   <BookmarkIcon sx={{ mr: 1, color: '#667eea', fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />
//                   <Typography variant="body1" sx={{ fontWeight: '500', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>My Wishlist</Typography>
//                 </MenuItem>

//                 <MenuItem onClick={handleLogout} sx={{ py: 1 }}>
//                   <LogoutIcon sx={{ mr: 1, color: '#ff6b6b', fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />
//                   <Typography variant="body1" sx={{ fontWeight: '500', color: '#ff6b6b', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>Logout</Typography>
//                 </MenuItem>
//               </Menu>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Modern Profile Dialog */}
//       <Dialog 
//         open={profileDialogOpen} 
//         onClose={handleProfileDialogClose}
//         maxWidth="sm"
//         fullWidth
//         sx={{
//           '& .MuiPaper-root': {
//             borderRadius: '20px',
//             background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
//             boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
//             overflow: 'hidden',
//             margin: { xs: 2, sm: 4 }
//           }
//         }}
//       >
//         <DialogTitle sx={{ 
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           color: 'white',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           py: { xs: 2, sm: 3 },
//           position: 'relative',
//           '&::after': {
//             content: '""',
//             position: 'absolute',
//             bottom: 0,
//             left: '50%',
//             transform: 'translateX(-50%)',
//             width: '60px',
//             height: '3px',
//             background: '#ffd700',
//             borderRadius: '2px'
//           }
//         }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <BookIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, color: '#ffd700' }} />
//             <Typography variant="h5" sx={{ fontWeight: '800', fontSize: { xs: '1.3rem', sm: '1.5rem' } }}>
//               Profile
//             </Typography>
//           </Box>
//           <IconButton 
//             onClick={handleProfileDialogClose} 
//             sx={{ 
//               color: 'white',
//               background: 'rgba(255,255,255,0.2)',
//               '&:hover': {
//                 background: 'rgba(255,255,255,0.3)',
//                 transform: 'rotate(90deg)'
//               },
//               transition: 'all 0.3s ease',
//               width: { xs: 32, sm: 40 },
//               height: { xs: 32, sm: 40 }
//             }}
//           >
//             <CloseIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
//           </IconButton>
//         </DialogTitle>

//         <DialogContent sx={{ p: 0 }}>
//           {/* Profile Header */}
//           <Box sx={{ 
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             color: 'white',
//             py: { xs: 3, sm: 4 },
//             textAlign: 'center',
//             position: 'relative'
//           }}>
//             <Box sx={{ position: 'relative', display: 'inline-block' }}>
//               <Avatar
//                 sx={{
//                   width: { xs: 80, sm: 100 },
//                   height: { xs: 80, sm: 100 },
//                   bgcolor: '#ffd700',
//                   fontSize: { xs: '2rem', sm: '2.5rem' },
//                   fontWeight: 'bold',
//                   border: '4px solid white',
//                   boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
//                 }}
//               >
//                 {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
//               </Avatar>
//             </Box>
            
//             <Typography variant="h4" sx={{ 
//               fontWeight: '800', 
//               mt: 2, 
//               mb: 1, 
//               color: 'white',
//               fontSize: { xs: '1.8rem', sm: '2.2rem' }
//             }}>
//               {user.username}
//             </Typography>
            
//             <Typography variant="h6" sx={{ 
//               color: 'rgba(255,255,255,0.8)', 
//               fontWeight: '500',
//               fontSize: { xs: '0.9rem', sm: '1rem' }
//             }}>
//               Book Enthusiast
//             </Typography>
//           </Box>

//           {/* Profile Info */}
//           <Box sx={{ p: { xs: 2, sm: 3 } }}>
//             <Box sx={{ 
//               display: 'flex', 
//               flexDirection: 'column',
//               gap: 2
//             }}>
//               {/* Username Card */}
//               <Box sx={{ 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 gap: 2,
//                 p: 3,
//                 background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
//                 borderRadius: '15px',
//                 border: '2px solid #e2e8f0',
//                 boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
//               }}>
//                 <Box sx={{
//                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   borderRadius: '12px',
//                   p: 1.5,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}>
//                   <PersonIcon sx={{ color: 'white', fontSize: { xs: '1.5rem', sm: '2rem' } }} />
//                 </Box>
//                 <Box sx={{ flex: 1 }}>
//                   <Typography variant="body2" sx={{ 
//                     color: '#718096', 
//                     fontSize: { xs: '0.7rem', sm: '0.8rem' }, 
//                     fontWeight: '600',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.5px'
//                   }}>
//                     Username
//                   </Typography>
//                   <Typography variant="h6" sx={{ 
//                     fontWeight: '700', 
//                     color: '#2d3748',
//                     fontSize: { xs: '1rem', sm: '1.2rem' }
//                   }}>
//                     {user.username}
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* Email Card */}
//               <Box sx={{ 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 gap: 2,
//                 p: 3,
//                 background: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)',
//                 borderRadius: '15px',
//                 border: '2px solid #9ae6b4',
//                 boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
//               }}>
//                 <Box sx={{
//                   background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
//                   borderRadius: '12px',
//                   p: 1.5,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}>
//                   <EmailIcon sx={{ color: 'white', fontSize: { xs: '1.5rem', sm: '2rem' } }} />
//                 </Box>
//                 <Box sx={{ flex: 1 }}>
//                   <Typography variant="body2" sx={{ 
//                     color: '#2f855a', 
//                     fontSize: { xs: '0.7rem', sm: '0.8rem' }, 
//                     fontWeight: '600',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.5px'
//                   }}>
//                     Email Address
//                   </Typography>
//                   <Typography variant="h6" sx={{ 
//                     fontWeight: '600', 
//                     color: '#2d3748',
//                     fontSize: { xs: '0.9rem', sm: '1.1rem' },
//                     wordBreak: 'break-word'
//                   }}>
//                     {user.email}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </DialogContent>

//         <DialogActions sx={{ 
//           p: { xs: 2, sm: 3 }, 
//           background: '#f8fafc', 
//           borderTop: '1px solid #e2e8f0' 
//         }}>
//           <Button 
//             variant="contained"
//             onClick={handleProfileDialogClose}
//             sx={{
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               borderRadius: '25px',
//               px: { xs: 4, sm: 6 },
//               py: { xs: 1, sm: 1.5 },
//               fontSize: { xs: '0.9rem', sm: '1rem' },
//               fontWeight: '700',
//               boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
//               '&:hover': {
//                 background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
//                 transform: 'translateY(-2px)',
//                 boxShadow: '0 12px 30px rgba(102, 126, 234, 0.5)',
//               },
//               transition: 'all 0.3s ease',
//               width: '100%',
//               maxWidth: '200px'
//             }}
//           >
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Mobile Drawer */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { xs: 'block', sm: 'none' },
//           '& .MuiDrawer-paper': { 
//             boxSizing: 'border-box', 
//             width: 280,
//             border: 'none',
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// }

//  export default Navbar;



// This is working code


import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Book as BookIcon,
  Home as HomeIcon,
  Recommend as RecommendIcon,
  Login as LoginIcon,
  PersonAdd as PersonAddIcon,
  Logout as LogoutIcon,
  Bookmark as BookmarkIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("bookhub_user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const handleProfileClick = (event) => {
    if (!user || !user.isLoggedIn) {
      alert("⚠️ Please signup or login first!");
      return;
    }
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => setProfileAnchor(null);

  const handleLogout = () => {
    localStorage.removeItem("bookhub_user");
    setUser(null);
    handleProfileClose();
    alert("✅ Logged out successfully!");
    navigate("/login");
  };

  const handleProfileDialogOpen = () => {
    setProfileDialogOpen(true);
    handleProfileClose();
  };

  const handleProfileDialogClose = () => setProfileDialogOpen(false);

  const handleWishlistClick = () => {
    handleProfileClose();
    navigate("/favorites");
  };

  const isActive = (path) => location.pathname === path;

  // Menu items based on login status
  const getMenuItems = () => {
    const baseItems = [
      { text: "Home", path: "/", icon: <HomeIcon /> },
      { text: "Recommend", path: "/recommend", icon: <RecommendIcon /> },
      //  { text: "Login", path: "/login", icon: <LoginIcon /> },
      //   { text: "SignUp", path: "/signup", icon: <PersonAddIcon /> },
    ];

    if (user?.isLoggedIn) {
      return baseItems;
    } else {
      return [
        ...baseItems,
        { text: "Login", path: "/login", icon: <LoginIcon /> },
        { text: "SignUp", path: "/signup", icon: <PersonAddIcon /> },
      ];
    }
  };

  const menuItems = getMenuItems();

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        color: "white",
      }}
    >
      <Box sx={{ p: 2, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.3)" }}>
        <BookIcon sx={{ fontSize: 40, color: "#ffd700" }} />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          BookHub
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={toggleDrawer}
            sx={{
              color: "white",
              background: isActive(item.path) ? "rgba(255,255,255,0.15)" : "transparent",
              "&:hover": { background: "rgba(255,255,255,0.25)" },
            }}
          >
            <Box sx={{ mr: 1 }}>{item.icon}</Box>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        {user?.isLoggedIn && (
          <>
            <ListItem
              component={Link}
              to="/favorites"
              onClick={toggleDrawer}
              sx={{
                color: "white",
                background: isActive("/favorites") ? "rgba(255,255,255,0.15)" : "transparent",
                "&:hover": { background: "rgba(255,255,255,0.25)" },
              }}
            >
              <Box sx={{ mr: 1 }}><BookmarkIcon /></Box>
              <ListItemText primary="My Wishlist" />
            </ListItem>
            <ListItem
              onClick={() => {
                handleLogout();
                toggleDrawer();
              }}
              sx={{
                color: "white",
                "&:hover": { background: "rgba(255,255,255,0.25)" },
              }}
            >
              <Box sx={{ mr: 1 }}><LogoutIcon /></Box>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Left: Logo and Menu button (mobile) */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              sx={{ display: { xs: "block", md: "none" }, mr: 1 }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <BookIcon sx={{ fontSize: 30, mr: 1, color: "#ffd700" }} />
            <Typography
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: 800,
                fontSize: "1.5rem",
                background: "linear-gradient(45deg, #fff 30%, #ffd700 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BookHub
            </Typography>
          </Box>

          {/* Right: Menu Items for Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: "white",
                  fontWeight: isActive(item.path) ? "bold" : "normal",
                  background: isActive(item.path) ? "rgba(255,255,255,0.15)" : "transparent",
                  borderRadius: "20px",
                  px: 2,
                  py: 1,
                  fontSize: "0.9rem",
                  minWidth: "auto",
                  "&:hover": { 
                    background: "rgba(255,255,255,0.25)",
                    transform: "translateY(-1px)"
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {item.icon}
                  <span>{item.text}</span>
                </Box>
              </Button>
            ))}
            
            {/* Right: Account Circle */}
            <IconButton
              onClick={handleProfileClick}
              sx={{
                color: "white",
                border: user?.isLoggedIn ? "2px solid #ffd700" : "2px solid rgba(255,255,255,0.3)",
                borderRadius: "50%",
                width: 42,
                height: 42,
                ml: 1,
                "&:hover": {
                  transform: "scale(1.1)",
                  background: "rgba(255,255,255,0.2)",
                },
              }}
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>

          {/* For Mobile: Account Circle only */}
          <IconButton
            onClick={handleProfileClick}
            sx={{
              color: "white",
              border: user?.isLoggedIn ? "2px solid #ffd700" : "2px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              width: 42,
              height: 42,
              display: { xs: "flex", md: "none" },
              "&:hover": {
                transform: "scale(1.1)",
                background: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Profile Dropdown (only when logged in) */}
      {user?.isLoggedIn && (
        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={handleProfileClose}
          sx={{
            "& .MuiPaper-root": {
              background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
              color: "white",
            }
          }}
        >
          <MenuItem onClick={handleProfileDialogOpen}>
            <PersonIcon sx={{ mr: 1, color: "#ffd700" }} /> 
            <span>My Profile</span>
          </MenuItem>
          <MenuItem onClick={handleWishlistClick}>
            <BookmarkIcon sx={{ mr: 1, color: "#ffd700" }} /> 
            <span>My Wishlist</span>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <LogoutIcon sx={{ mr: 1, color: "#ffd700" }} /> 
            <span>Logout</span>
          </MenuItem>
        </Menu>
      )}

      {/* Profile Dialog */}
      <Dialog 
        open={profileDialogOpen} 
        onClose={handleProfileDialogClose}
        sx={{
          "& .MuiPaper-root": {
            background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
            color: "white",
          }
        }}
      >
        <DialogTitle sx={{ color: "#ffd700", fontWeight: "bold" }}>Profile</DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 1 }}><b>Username:</b> {user?.username}</Typography>
          <Typography><b>Email:</b> {user?.email}</Typography>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleProfileDialogClose}
            sx={{ 
              color: "#ffd700",
              "&:hover": {
                background: "rgba(255,215,0,0.1)"
              }
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Drawer for mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 250,
            background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;















