"use client";

import React, { ReactElement, useEffect, useState } from "react";
import parse from 'html-react-parser';
import { Game } from "@/scripts/GameModel";
import { Post } from "@/scripts/Post";

import '@/css/Modal.css'
import { BiX, BiXCircle } from "react-icons/bi";